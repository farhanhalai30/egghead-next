import PropTypes from 'prop-types'
import noop from '../../utils/noop'
const {string, bool, number, array, oneOfType, object, func} = PropTypes

export const propTypes = {
  url: oneOfType([string, array]),
  wistia_url: oneOfType([string, array]),
  hls_url: oneOfType([string, array]),
  dash_url: oneOfType([string, array]),
  subtitlesUrl: oneOfType([string, array]),
  poster: string,
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  autoplay: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  title: string,
  description: string,
  progressFrequency: number,
  playsinline: bool,
  displaySubtitles: bool,
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onMuted: func,
  onViewModeChanged: func,
  onProgress: func,
  onSubtitleChange: func,
  onVideoQualityChanged: func,
  videoQualityCookie: object,
  preload: bool,
  onPlaybackRateChange: func,
  onVolumeChange: func,
}

export const defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: 80,
  playbackRate: 1,
  width: 640,
  height: 360,
  hidden: false,
  muted: false,
  autoplay: false,
  progressFrequency: 250,
  playsinline: false,
  displaySubtitles: false,
  preload: true,
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onEnded: noop,
  onViewModeChanged: noop,
  onError: noop,
  onDuration: noop,
  onMuted: noop,
  onProgress: noop,
  onSubtitleChange: noop,
  onVideoQualityChanged: noop,
  videoQualityCookie: null,
  onPlaybackRateChange: noop,
  onVolumeChange: noop,
}
