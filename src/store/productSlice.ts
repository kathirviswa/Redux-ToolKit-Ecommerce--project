import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductState {
  products: Product[];
  nextId: number;
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    },
    {
      id: 3,
      name: "Ultra HD Camera",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    },
    {
      id: 4,
      name: "Designer Sunglasses",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    }
  ],
  nextId: 5,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Omit<Product, 'id'>>) {
      const newProduct = {
        ...action.payload,
        id: state.nextId,
      };
      state.products.push(newProduct);
      state.nextId++;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;