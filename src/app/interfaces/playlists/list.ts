// Playlist data list interfaces
export interface RootObjectList {
    results: Results;
  }

export interface Results {
    items: Item[];
    page: number;
    per_page: number;
    total: number;
    type: string;
  }

export interface Item {
    artists: Artist[];
    cover_images: Coverimages;
    created_at: string;
    description?: any;
    duration: number;
    href: string;
    id: number;
    image_320x320: string;
    image_52x52: string;
    image_80x80: string;
    playlist_items_count: number;
    position: number;
    tags: Tag[];
    title: string;
    type: string;
    updated_at: string;
    user_display_name: string;
    user_id: number;
    user_uuid: string;
    username: string;
  }

export interface Tag {
    api_name: string;
    name: string;
    popularity: number;
    tag_partner: string;
    type: string;
  }

export interface Coverimages {
    image_80x80_1: string;
    image_80x80_2: string;
    image_80x80_3: string;
    image_80x80_4?: string;
    image_80x80_cover?: string;
  }

export interface Artist {
    id: number;
    name: string;
  }