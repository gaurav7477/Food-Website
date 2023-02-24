"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 5948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/stripe.js

const stripe = new (external_stripe_default())("sk_test_51MewaFSHDSwO1bkGQcNW9acBiEeyUc4cFzFPS435POB96hmMEqufkSbwy2c4hJf7O2LMgIoTfdEBDbc3KhTcoLoB006XGlM4Pz");
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const params = {
                submit_type: "pay",
                mode: "payment",
                payment_method_types: [
                    "card"
                ],
                line_items: req.body.map((item)=>{
                    const img = item.image.asset._ref;
                    const newImage = img.replace("image-", `https://cdn.sanity.io/images/7bgbzvwb/production/`).replace("-jpg", ".jpg");
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                                images: [
                                    newImage
                                ]
                            },
                            unit_amount: item.price * 100
                        },
                        adjustable_quantity: {
                            enabled: false
                        },
                        quantity: item.quantity
                    };
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/cart`
            };
            // checkout session
            const session = await stripe.checkout.sessions.create(params);
            console.log(session);
            res.status(200).json(session);
        } catch (error) {
            res.status(500).json(error.massage);
        }
    } else {
        res.setHeader("Allow", "post");
        res.status(405).end("method not allowed");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5948));
module.exports = __webpack_exports__;

})();