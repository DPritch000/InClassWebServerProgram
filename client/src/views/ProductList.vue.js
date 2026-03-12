import { useProductStore } from '../stores/products';
const products = useProductsStore();
const __VLS_export = (await import('vue')).defineComponent({});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "title is-1" },
});
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['is-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
for (const [product] of __VLS_vFor((__VLS_ctx.products.products))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (product.id),
        ...{ class: "box" },
    });
    /** @type {__VLS_StyleScopedClasses['box']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (product.imageUrl),
        alt: "Product Image",
        ...{ class: "image is-4by3" },
    });
    /** @type {__VLS_StyleScopedClasses['image']} */ ;
    /** @type {__VLS_StyleScopedClasses['is-4by3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
    (product.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    (product.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "price" },
    });
    /** @type {__VLS_StyleScopedClasses['price']} */ ;
    // @ts-ignore
    [products,];
}
// @ts-ignore
[];
export default {};
