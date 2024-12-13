class IncludeElement extends HTMLElement {
    async connectedCallback() {
        const src = this.getAttribute('src')
        if (!src) return;

        const content = await fetch(src).then(r => r.text());
        this.innerHTML = content
    }
}

customElements.define('html-include', IncludeElement)