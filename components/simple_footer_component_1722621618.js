/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722621618", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16 md:p-12 lg:p-16 rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-8 border-pink-300 sm:mx-auto lg:my-10 opacity-30">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-semibold text-white hover:text-pink-200 transition duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10" alt="Landwind Logo" />
                            EtherScan: Real-Time Ethereum Transaction Analytics
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white opacity-80 hover:opacity-100 transition duration-300">
                        Monitor new Ethereum transactions as they happen with our powerful on-chain analysis tools. Gain crucial insights into smart contract activity, token transfers, and more in this ethereal digital landscape.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
