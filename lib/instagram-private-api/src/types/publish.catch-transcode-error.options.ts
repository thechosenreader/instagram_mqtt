import { IgApiClient } from '../core/client';
import { MediaUploadFinishOptions } from './media.uploadfinish.options';
import { PublishVideoInfo } from './publish.video-info';

export interface PublishCatchTranscodeErrorOptions {
  client: IgApiClient;
  finish: MediaUploadFinishOptions;
  transcode_delay_ms?: number;
  max_retries?: number;
  video_info?: PublishVideoInfo;
}
