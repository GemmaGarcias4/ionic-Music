// Detail playlist interface

export interface RootObjectDetail {
    playlist: Playlist;
  }

export interface Playlist {
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
    tracks: Tracks;
    type: string;
    updated_at: string;
    user_display_name: string;
    user_id: number;
    user_uuid: string;
    username: string;
  }

export interface Tracks {
    href: string;
    items: Item[];
    next?: any;
    page: number;
    per_page: number;
    previous?: any;
    total: number;
    version: string;
  }

export interface Item {
    album: Album;
    album_id: number;
    album_title: string;
    artist_id: number;
    artist_name: string;
    bpm?: number;
    cdn_clip_d: string;
    cdn_clip_p: string;
    cover: string;
    cover_320: string;
    duration: number;
    explicit_lyrics: boolean;
    genre: string;
    href: string;
    id: number;
    isrc: string;
    position: number;
    quality: string;
    released_on: string;
    title: string;
    track_number: number;
    type: string;
    version_title?: any;
    volume: number;
    year: number;
    urlTrack: string;
    loop: boolean;
    reproduce: boolean;
  }

export interface Album {
    album_id: number;
    album_title: string;
    artist_id: number;
    artist_name: string;
    track_count: number;
    upc: string;
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
    image_80x80_4: string;
    image_80x80_cover?: any;
  }

export interface Artist {
    id: number;
    name: string;
  }
