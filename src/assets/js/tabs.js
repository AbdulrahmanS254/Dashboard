(function() {
    const tabs = document.querySelectorAll(".js-tabs");

    tabs.forEach(tab => {
        const tabsLinks = tab.querySelectorAll(".js-tab-link");
        let currentActiveTab = tab.querySelector(".js-tab-link.is-active");

        const toggleTab = (toggledTabLink = currentActiveTab) => {
            currentActiveTab = toggledTabLink || currentActiveTab;
            toggledTabLink.classList.toggle("is-active");

            const toggledTabData = toggledTabLink.dataset.index;
            const toggledTabArea = tab.querySelector(`.js-tab-area[data-index='${toggledTabData}']`);

            if (toggledTabArea) {
                toggledTabArea.classList.toggle("is-active");
            } else {
                console.error(`No tab area found for index: ${toggledTabData}`);
            }
        };

        if (!currentActiveTab && tabsLinks.length > 0) {
            toggleTab(tabsLinks[0]);
        }

        tabsLinks.forEach(tabsLink => {
            tabsLink.addEventListener("click", function(event) {
                if (currentActiveTab === this) {
                    return;
                }
                if (currentActiveTab) {
                    toggleTab();
                }

                toggleTab(this);
            });
        });
    });
})();
