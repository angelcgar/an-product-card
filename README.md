# an-product-card

Este es un ejemplo de despliegue para npm

```javascript
<ProductCard
  product={product}
  initialValue={{
    count: 4,
    // maxCount: 10,
  }}
>
  {() => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
