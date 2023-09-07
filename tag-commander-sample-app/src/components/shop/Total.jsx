function Total({ items, defaultStoreCurrency}) {
  const total = items.reduce((acc, item) => {
    if (item) {
      acc += item.price * item.quantity;
    }
    return acc;
  }, 0);

  return (
    <span className="grand-total">
        { " " }{ total }{ defaultStoreCurrency }{ " " }
      </span>
  );
}
export default Total;
