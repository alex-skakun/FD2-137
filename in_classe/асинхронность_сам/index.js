// const cancelTask = sheduleTask(() => {
//   console.log("task");
// });

// setTimeout(() => {
//   cancelTask();
// }, 100);

// function sheduleTask(task) {
//   const id = setTimeout(() => task(), 300);
//   return () => clearTimeout(id);
// }

// queueMicrotask(() => {});

// requestIdleCallback(() => {});

// cancelIdleCallback(id);

// const frameId = requestAnimationFrame(() => {});

// cancelAnimationFrame(frameId);

const stop = renderCycle(() => {});

function renderCycle(callback) {
  const idRef = { id: 0 };
  const render = () => {
    idRef.id = requestAnimationFrame(() => {
      callback();
      render();
    });
  };

  idRef.id = requestAnimationFrame(() => {
    callback();

    requestAnimationFrame(() => {
      callback();
      requestAnimationFrame();
    });
  });

  render();

  return () => {
    cancelAnimationFrame(idRef.id);
  };
}
