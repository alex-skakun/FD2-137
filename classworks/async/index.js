const stop = renderCycle(() => {

});

function renderCycle(callback) {
    const idRef = { id: 0 };
    const render = () => {
        idRef.id = requestAnimationFrame(() => {
            callback();
            render();
        });
    };

    render();

    return () => {
        cancelAnimationFrame(idRef.id);
    };
}


function scheduleTask(task) {
    const id = setTimeout(task, 300);

    return () => clearTimeout(id);
}


queueMicrotask(() => {

});

const id = requestIdleCallback(() => {

});

cancelIdleCallback(id);

const frameId = requestAnimationFrame(() => {

});

cancelAnimationFrame(frameId);
