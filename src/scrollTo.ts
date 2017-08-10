export function scrollTo(options: string | { selector: string, step: number }) {
    let element: Element | null | any;
    let step = 30;

    if ("string" === typeof options) {
        element = document.querySelector(options);
    } else {
        element = document.querySelector(options.selector);

        if (options.step) {
            step = 0 > options.step ? options.step * -1 : options.step;
        }
    }

    if (!element) {
        return;
    }

    if (element.offsetTop < window.pageYOffset) {
        step *= -1;
    }

    let oldScrollY: number;

    const frame = (timestamp: number) => {
        oldScrollY = window.pageYOffset; // fix chrome

        const { offsetTop } = element;
        const newScrollY = window.pageYOffset + step;

        if (0 < step) {
            window.scrollTo(window.pageXOffset, newScrollY > offsetTop ? offsetTop : newScrollY);
        } else {
            window.scrollTo(window.pageXOffset, newScrollY < offsetTop ? offsetTop : newScrollY);
        }

        if (window.pageYOffset !== oldScrollY && window.pageYOffset !== offsetTop) {
            window.requestAnimationFrame(frame);
        }
    };

    window.requestAnimationFrame(frame);
}
