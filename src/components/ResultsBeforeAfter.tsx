import { useState, useRef, useEffect } from "react";

export default function ResultsBeforeAfter() {
  const [value, setValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const setBA = (v: number) => {
    const newValue = Math.max(0, Math.min(100, v));
    setValue(newValue);
  };

  const getPercentFromEvent = (
    ev: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent
  ) => {
    if (!wrapRef.current) return 50;
    const rect = wrapRef.current.getBoundingClientRect();
    const clientX =
      "touches" in ev
        ? (ev as TouchEvent).touches[0].clientX
        : (ev as MouseEvent).clientX;
    const x = clientX - rect.left;
    return (x / rect.width) * 100;
  };

  const onDown = (ev: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setBA(getPercentFromEvent(ev));
  };

  const onMove = (ev: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    setBA(getPercentFromEvent(ev));
  };

  const onUp = () => {
    setIsDragging(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setBA(value - 2);
    if (e.key === "ArrowRight") setBA(value + 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMove as any);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove as any);
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove as any);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove as any);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging, value]);

  return (
    <section id="resultados">
      <div className="container">
        <div className="reveal">
          <div className="section-title">Resultados</div>
          <h2 className="section-h2">Antes e depois (exemplo ilustrativo)</h2>
          <p className="section-sub">
            Use fotos reais com autorização do paciente. Aqui vai um slider para
            mostrar a diferença com elegância.
          </p>
        </div>

        <div
          className="ba reveal"
          aria-label="Antes e depois com controle deslizante"
        >
          <div
            className="ba-wrap"
            ref={wrapRef}
            onMouseDown={onDown}
            onTouchStart={onDown}
          >
            <div className="ba-img ba-before" aria-hidden="true"></div>
            <div
              className="ba-img ba-after"
              style={{ clipPath: `inset(0 0 0 ${value}%)` }}
              aria-hidden="true"
            ></div>

            <div className="ba-labels">
              <span>Antes</span>
              <span>Depois</span>
            </div>

            <div
              className="ba-handle"
              style={{ left: `${value}%` }}
              aria-hidden="true"
            ></div>
            <div
              className="ba-knob"
              style={{
                left: `${value}%`,
                cursor: isDragging ? "grabbing" : "grab",
              }}
              role="slider"
              aria-label="Arraste para comparar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(value)}
              tabIndex={0}
              onKeyDown={onKeyDown}
            >
              ⇆
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
