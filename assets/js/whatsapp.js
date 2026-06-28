/*==================================================
        RSM AYURVEDA
        WHATSAPP ORDER SYSTEM
==================================================*/

// ===== CHANGE YOUR WHATSAPP NUMBER =====
const whatsappNumber = "919999999999"; // Example: 919876543210

/*=========================================
        BUY PRODUCT
=========================================*/

document.querySelectorAll(".buy-whatsapp").forEach(button => {

    button.addEventListener("click", function () {

        const product = this.dataset.product || "Ayurvedic Product";

        const price = this.dataset.price || "Contact for Price";

        const quantity = this.dataset.quantity || "1";

        const message =
`🌿 Hello RSM Ayurveda,

I want to order the following product.

📦 Product : ${product}

💰 Price : ${price}

🔢 Quantity : ${quantity}

Please guide me regarding availability and delivery.

Thank You 🙏`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});


/*=========================================
        SIMPLE CONTACT BUTTON
=========================================*/

document.querySelectorAll(".whatsapp-contact").forEach(button => {

    button.addEventListener("click", () => {

        const message =
`🌿 Hello RSM Ayurveda,

I need consultation regarding Ayurvedic treatment.

Please guide me.

Thank You 🙏`;

        window.open(

            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

            "_blank"

        );

    });

});


/*=========================================
        FLOATING WHATSAPP BUTTON
=========================================*/

const floatingButton = document.querySelector(".whatsapp-float");

if (floatingButton) {

    floatingButton.addEventListener("click", function (e) {

        e.preventDefault();

        const message =
`🌿 Hello RSM Ayurveda,

I visited your website.

I need more information.

Thank You 🙏`;

        window.open(

            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,

            "_blank"

        );

    });

}

console.log("✅ WhatsApp Integration Loaded");