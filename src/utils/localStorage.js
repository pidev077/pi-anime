const WISHLIST_KEY = 'anime_wishlist';

export function saveToWishlist(item) {
  const current = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  if (!current.find(i => i.mal_id === item.mal_id)) {
    current.push(item);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(current));
  }
}

export function getWishlist() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}

export function removeFromWishlist(item) {
  const current = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  const updated = current.filter(i => i.mal_id !== item.mal_id);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
}