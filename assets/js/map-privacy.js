(function() {
    function initMap2Click() {
        if (!window.map2ClickInitialized) {
            window.map2ClickInitialized = true;
            document.body.addEventListener('click', function(e) {
                if (e.target && e.target.classList.contains('map-load-btn')) {
                    const containerId = e.target.getAttribute('data-container-id');
                    const container = document.getElementById(containerId);
                    if (!container) return;
                    const template = container.querySelector('.map-template');
                    const placeholder = container.querySelector('.map-placeholder');
                    if (template && placeholder) {
                        const clone = template.content.cloneNode(true);
                        placeholder.remove();
                        container.appendChild(clone);
                    }
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap2Click);
    } else {
        initMap2Click();
    }
})();
