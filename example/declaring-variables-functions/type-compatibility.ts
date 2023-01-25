
// Type Compatibility
// The following code is valid because the attributes object has the same structure as the Attributes interface:
interface Attributes {
    column: number;
    row: number;
    stackOnMobile: boolean;
    mobileColumn: number;
    gap: number;
}

const attributes: Attributes = {
    column: 2,
    row: 3,
    stackOnMobile: true,
    mobileColumn: 1,
    gap: 10
};

// Destructure the attributes object.
const { column, row, stackOnMobile, mobileColumn, gap } = attributes;