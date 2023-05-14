import { Card, IndexTable, TextField } from "@shopify/polaris";

export function Variants({ variants, updateVariants, isUpdating }) {
  console.log("Variants each: ", variants);
  return (
    <Card sectioned title="Variants">
      <IndexTable
        itemCount={variants.length}
        resourceName={{ singular: "variant", plural: "variants" }}
        headings={[{ title: "Variant" }, { title: "Price" }]}
        selectable={false}
      >
        {variants.map((variant) => (
          <IndexTable.Row key={variant.id}>
            <IndexTable.Cell>
              <TextField
                value={variant.title}
                disabled
                readOnly
                label="Variant"
                labelHidden
              />
            </IndexTable.Cell>
            <IndexTable.Cell>
              <TextField
                value={variant.price}
                label="Price"
                labelHidden
                type="number"
                prefix="$"
                onChange={(price) => updateVariants(variant.id, price)}
                disabled={isUpdating}
              />
            </IndexTable.Cell>
          </IndexTable.Row>
        ))}
      </IndexTable>
    </Card>
  );
}
