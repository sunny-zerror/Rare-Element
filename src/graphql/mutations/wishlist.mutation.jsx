import { gql } from "@apollo/client";

export const ADD_TO_WISHLIST = gql`
  mutation AddToWishlist($input: AddToWishlistInput!, $userId: ID!) {
    addToWishlist(input: $input, userId: $userId) {
      _id
      userId
      productId
      variantId
      addedAt
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_FROM_WISHLIST = gql`
  mutation RemoveFromWishlist($wishlistId: ID!, $userId: ID!) {
    removeFromWishlist(wishlistId: $wishlistId, userId: $userId)
  }
`;

export const CLEAR_WISHLIST = gql`
  mutation ClearWishlist($userId: ID!) {
    clearWishlist(userId: $userId) {
      deletedCount
    }
  }
`;
