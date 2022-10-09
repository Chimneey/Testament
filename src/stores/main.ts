import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
    // a function that returns a fresh state
    state: () => ({
        counter: 0,
        recipients: [
            { name: 'Save the Children® Colombia', address: '0x44505D88F17c1997544D0901C0dF8dd2e398A8C6', img: 'https://www.savethechildren.org/content/dam/global/images/countries/colombia/colombia-hero-ch1119292.jpg/_jcr_content/renditions/cq5dam.thumbnail.1700.1700.jpg' },
            { name: 'Audrey Clay', address: '0x...', img: 'https://randomuser.me/api/portraits/women/5.jpg' },
            { name: 'Aguirre Klein', address: '0x...', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { name: 'Tucker Kaufman', address: '0x...', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
            { name: 'Herbert Keller', address: '0x...', img: 'https://randomuser.me/api/portraits/men/5.jpg' },
        ],
    }),
    // optional getters
    getters: {
        // getters receive the state as first parameter
        doubleCounter: (state) => state.counter * 2,
        // use getters in other getters
        doubleCounterPlusOne(): number {
            return this.doubleCounter + 1
        },
        getRecipients: (state) => state.recipients
    },
    // optional actions
    actions: {
        reset() {
            // `this` is the store instance
            this.counter = 0
        },
        addRecipient(recipient: { name: string, address: string, img: string }) {
            this.recipients.push(recipient)
        },
        removeRecipient(recipient: { name: string, address: string, img: string }) {
            let arr = this.recipients
            const index = arr.indexOf(recipient);
            if (index > -1) {
                arr.splice(index, 1);
            }
        },
    },
})