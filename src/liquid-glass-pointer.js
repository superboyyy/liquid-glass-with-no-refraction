/**
 * Optional pointer sheen. CSS works without this.
 * Call attachLiquidGlassPointer(root) to track the cursor on .lg--interactive.
 */
export function attachLiquidGlassPointer(root = document) {
  const nodes = root.querySelectorAll(".lg--interactive");

  const onMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--lg-pointer-x", `${x}%`);
    target.style.setProperty("--lg-pointer-y", `${y}%`);
  };

  const onLeave = (event) => {
    event.currentTarget.style.setProperty("--lg-pointer-x", "50%");
    event.currentTarget.style.setProperty("--lg-pointer-y", "18%");
  };

  nodes.forEach((node) => {
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
  });

  return () => {
    nodes.forEach((node) => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    });
  };
}

if (typeof window !== "undefined") {
  window.attachLiquidGlassPointer = attachLiquidGlassPointer;
}
