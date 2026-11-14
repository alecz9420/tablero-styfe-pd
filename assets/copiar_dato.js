(() => {
    const boundPlots = new WeakSet();
    const plotSelector = '[id*="copy-graph"] .js-plotly-plot';
    let bindFrame = 0;
    let hideTimer = 0;

    function showMessage(message) {
        const notice = document.getElementById("notify-copy");
        if (!notice) return;

        clearTimeout(hideTimer);
        notice.textContent = message;
        notice.hidden = false;
        hideTimer = setTimeout(() => { notice.hidden = true; }, 4500);
    }

    async function copyPoint(event) {
        const point = event?.points?.[0];
        if (!point) return;

        const custom = point.customdata ?? point.data?.customdata?.[point.pointNumber];
        const raw = [
            point.value,
            Array.isArray(custom) ? custom[0] : custom,
            point.y,
            point.x,
        ].find(Number.isFinite);
        if (raw === undefined) return;

        const decimals = Number.isInteger(raw) ? 0 : 2;
        const value = raw.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        });

        try {
            await navigator.clipboard.writeText(value);
            showMessage("Dato copiado");
        } catch {
            showMessage(`No se pudo copiar. Valor: ${value}`);
        }
    }

    function bindPlots() {
        bindFrame = 0;
        document.querySelectorAll(plotSelector).forEach((plot) => {
            if (boundPlots.has(plot) || typeof plot.on !== "function") return;
            plot.on("plotly_click", copyPoint);
            boundPlots.add(plot);
        });
    }

    function scheduleBinding() {
        if (!bindFrame) bindFrame = requestAnimationFrame(bindPlots);
    }

    new MutationObserver(scheduleBinding).observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
    scheduleBinding();
})();
