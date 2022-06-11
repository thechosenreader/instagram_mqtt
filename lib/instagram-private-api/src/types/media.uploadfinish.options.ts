export interface MediaUploadFinishOptions {
  upload_id: string;
  source_type: string;
  video?: {
    length: number;
    clips?: Array<{
      length: number;
      source_type: string;
    }>;
    poster_frame_index?: number;
    audio_muted?: boolean;
  };
}
