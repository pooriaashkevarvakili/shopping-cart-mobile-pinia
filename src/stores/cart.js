import {
    defineStore
} from "pinia"
import Swal from "sweetalert2"

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const useCart = defineStore('cart', {
    state: () => {
        return {
            cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        }
    },
    getters: {
        allProducts() {
            return this.cart
        },
        count() {
            return this.cart.length
        },
        totalAmount() {
            return this.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    actions: {
        add(product) {
            const item = this.cart.find((p) => p.id == product.id)
            if (!item) {
                this.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
            updateLocalStorage(this.cart)
            Swal.fire({
                title: 'product Added',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        },
        clear() {
            this.cart = []
            updateLocalStorage(this.cart)

            Swal.fire({
                title: 'product Added',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        },
        remove(id) {
            this.cart = this.cart.filter((cart) => cart.id != id)

            updateLocalStorage(this.cart)
            Swal.fire({
                title: 'product deleted',
                icon: 'warning',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })

        },
        increment(id) {
            const item = this.cart.find((p) => p.id == id)
            if (item) {
                item.quantity++
            }
            updateLocalStorage(this.cart)
            Swal.fire({
                title: 'product updated',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        },
        decrement(id) {
            const item = this.cart.find((p) => p.id == id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            }
            updateLocalStorage(this.cart)
            Swal.fire({
                title: 'product notUpdated',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        }
    },

})