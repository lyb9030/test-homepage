```javascript
/* =========================
   공통 헤더 메뉴 JavaScript
========================= */


/* =========================
   드롭다운 메뉴 열기 / 닫기
========================= */

function toggleMenu(menuId) {

    const menu =
        document.getElementById(
            menuId
        );


    if (!menu) {
        return;
    }


    const wasActive =
        menu.classList.contains(
            "active"
        );


    /* 모든 메뉴 닫기 */

    document
        .querySelectorAll(
            ".menu-item"
        )
        .forEach(
            function(item) {

                item.classList.remove(
                    "active"
                );

            }
        );


    /* 클릭한 메뉴 열기 */

    if (!wasActive) {

        menu.classList.add(
            "active"
        );

    }

}



/* =========================
   메뉴 바깥 클릭 시 닫기
========================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.closest(
                ".menu-item"
            )
        ) {

            document
                .querySelectorAll(
                    ".menu-item"
                )
                .forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );

        }

    }
);
```
