export type ProductCategory = 'covers' | 'refills' | 'accessories';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  price: number;
  badge?: string;
  image?: string;
  pattern?: 'dots' | 'lines' | 'squared' | 'cornell' | 'planner';
  meta: string;
};

const images = {
  green: 'https://images.pexels.com/photos/20065424/pexels-photo-20065424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  desk: 'https://images.pexels.com/photos/12516294/pexels-photo-12516294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  paper: 'https://images.pexels.com/photos/7319228/pexels-photo-7319228.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  journal: 'https://images.pexels.com/photos/35810927/pexels-photo-35810927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  notebook: 'https://images.pexels.com/photos/7319184/pexels-photo-7319184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  craft: 'https://images.pexels.com/photos/6763919/pexels-photo-6763919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const products: Product[] = [
  { id: 'cover-olive', slug: 'a5-vegan-cover-olive', name: 'A5 მოდულური ყდა — Forest Olive', category: 'covers', categoryLabel: 'ყდა', description: 'ვეგანური ტყავი, მშვიდი ზეთისხილისფერი', price: 45, badge: 'ბესტსელერი', image: images.green, meta: 'A5 • 148 × 210 მმ' },
  { id: 'cover-kraft', slug: 'a5-kraft-cover', name: 'A5 მოდულური ყდა — Rose Kraft', category: 'covers', categoryLabel: 'ყდა', description: 'ტაქტილური ქაღალდი თბილ ქვიშისფერში', price: 28, image: images.craft, meta: 'A5 • 148 × 210 მმ' },
  { id: 'cover-linen', slug: 'a5-linen-cover', name: 'A5 მოდულური ყდა — Natural Linen', category: 'covers', categoryLabel: 'ყდა', description: 'ნატურალური ტექსტურა ყოველდღიური რიტმისთვის', price: 39, image: images.notebook, badge: 'ახალი', meta: 'A5 • 148 × 210 მმ' },
  { id: 'cover-charcoal', slug: 'a5-charcoal-cover', name: 'A5 მოდულური ყდა — Charcoal Frost', category: 'covers', categoryLabel: 'ყდა', description: 'მქრქალი, გამძლე და მინიმალისტური', price: 42, image: images.journal, meta: 'A5 • 148 × 210 მმ' },
  { id: 'refill-dots', slug: 'refill-dot-grid', name: 'Dot Grid (წერტილოვანი)', category: 'refills', categoryLabel: 'ფურცლები', description: 'თავისუფალი იდეებისთვის და ჩანაწერებისთვის', price: 16, pattern: 'dots', badge: '50 ფურცელი', meta: '120 გრ • 50 ფურცელი' },
  { id: 'refill-lines', slug: 'refill-lined', name: 'Lined (ხაზოვანი)', category: 'refills', categoryLabel: 'ფურცლები', description: 'სუფთა და მოწესრიგებული ყოველდღიური გვერდები', price: 16, pattern: 'lines', meta: '120 გრ • 50 ფურცელი' },
  { id: 'refill-square', slug: 'refill-squared', name: 'Squared (უჯრედებიანი)', category: 'refills', categoryLabel: 'ფურცლები', description: 'გეგმები, ცხრილები და ზუსტი ჩანაწერები', price: 16, pattern: 'squared', meta: '120 გრ • 50 ფურცელი' },
  { id: 'refill-cornell', slug: 'refill-cornell', name: 'Cornell (კორნელი)', category: 'refills', categoryLabel: 'ფურცლები', description: 'შენიშვნებისა და სწავლისთვის შექმნილი ფორმატი', price: 18, pattern: 'cornell', meta: '120 გრ • 40 ფურცელი' },
  { id: 'refill-planner', slug: 'refill-planner', name: 'Planner (დაგეგმვა)', category: 'refills', categoryLabel: 'ფურცლები', description: 'კვირის მშვიდად დასაგეგმად', price: 22, pattern: 'planner', meta: '120 გრ • 52 ფურცელი' },
  { id: 'discs', slug: 'discs-olive', name: 'მოდულური დისკები — Olive', category: 'accessories', categoryLabel: 'აქსესუარი', description: '8 დისკი, მქრქალი მეტალის ზედაპირით', price: 25, badge: '8 ცალი', image: images.green, meta: '8 დისკი • 24 მმ' },
  { id: 'dividers', slug: 'tab-dividers', name: 'გამყოფები — Tab Dividers', category: 'accessories', categoryLabel: 'აქსესუარი', description: 'ხუთი ფერადი გამყოფი რბილი კიდეებით', price: 14, image: images.paper, meta: '5 ცალი • A5' },
  { id: 'ruler', slug: 'ruler-bookmark', name: 'საზომი და სანიშნე', category: 'accessories', categoryLabel: 'აქსესუარი', description: 'თხელი საზომი, რომელიც გვერდზე რჩება', price: 19, image: images.craft, meta: 'მეტალი • A5' },
  { id: 'pen-loop', slug: 'pen-loop', name: 'NEBA Atelier Pen Duo', category: 'accessories', categoryLabel: 'აქსესუარი', description: 'ორი თხელი კალამი, ყოველდღიური წერისთვის', price: 22, image: images.desk, meta: '2 კალამი • 0.5 მმ' },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const formatPrice = (price: number, precise = false) => `₾ ${price.toFixed(precise ? 2 : 0)}`;
