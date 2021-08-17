import STRING_CONSTANTS from './string'

const LOCAL_DOWNLOADING_CONSTANTS = {
  CONFIG_FILE: `${STRING_CONSTANTS.USER_DATA_FOLDER}\\private\\MPEG1_CONVERSION_CONFIG.json`,
  ENVS: {
    TEST_ENV: "TEST_ENV",
    PROD_ENV: "PROD_ENV"
  },
  TEST_ENV: {
    SOURCE_BUCKET: "vxttest003"
  },
  PROD_ENV: {
    SOURCE_BUCKET: "vxtprod"
  },
  getS3AccelerateEndpointString(bucket) {
    return `${bucket}.s3-accelerate.amazonaws.com`
  },
  CONTENT_TYPE_DEFAULT: "multipart/byteranges",
  DOWNLOAD_MAX_TRIES: 3,
  DOWNLOAD_RETRY_TIMEOUT: 3000,

  //CHUNK_SIZE_IN_BYTES: 8388608,
  //MAX_NUMBER_OF_ACTIVE_CHUNKS: 100,
  //MAX_NUMBER_OF_FILE_POINTS: 100,
  //MIN_NUMBER_OF_FREE_CHUNK_TICKETS_TO_START_FILE_DOWNLOAD: 10,
  //MIN_NUMBER_OF_FREE_FILE_POINTS_TO_START_FILE_DOWNLOAD: 10,
  //MAX_NUMBER_OF_FILE_POINTS_PER_FILE:10,

  //CHUNK_SIZE_IN_BYTES: 2097152,
  //MAX_NUMBER_OF_ACTIVE_CHUNKS: 400,
  //MAX_NUMBER_OF_FILE_POINTS: 400,
  //MIN_NUMBER_OF_FREE_CHUNK_TICKETS_TO_START_FILE_DOWNLOAD: 40,
  //MIN_NUMBER_OF_FREE_FILE_POINTS_TO_START_FILE_DOWNLOAD: 40,
  //MAX_NUMBER_OF_FILE_POINTS_PER_FILE: 40,

  CHUNK_SIZE_IN_BYTES: 1048576,
  MAX_NUMBER_OF_ACTIVE_CHUNKS: 800,
  MAX_NUMBER_OF_FILE_POINTS: 800,
  MIN_NUMBER_OF_FREE_CHUNK_TICKETS_TO_START_FILE_DOWNLOAD: 80,
  MIN_NUMBER_OF_FREE_FILE_POINTS_TO_START_FILE_DOWNLOAD: 80,
  MAX_NUMBER_OF_FILE_POINTS_PER_FILE: 80,

  TIMEOUT_IF_UNABLE_TO_START_JOB_DOWNLOAD_MILLISECONDS: 1000,
  TIMEOUT_IF_UNABLE_TO_START_FILE_DOWNLOAD_MILLISECONDS: 1000,
  TIMEOUT_IF_UNABLE_TO_START_CHUNK_DOWNLOAD_MILLISECONDS: 100,
  TIMEOUT_IF_UNABLE_TO_START_APPENDING_CHUNK_DATA_MILLISECONDS: 100,
  TIMEOUT_BETWEEN_PRINTING_STATUS_UPDATES_MILLISECONDS: 180000,
  TIMEOUT_BETWEEN_POLLS_TO_SEE_IF_DOWNLOADS_ARE_COMPLETE_MILLISECONDS: 1000,
  VERITEXT_JOB_STATUSES: {
    DOWNLOAD_JOB_FILES_FUNCTION_NOT_YET_CALLED: "DOWNLOAD_JOB_FILES_FUNCTION_NOT_YET_CALLED",
    DOWNLOADING_AND_SAVING_TO_DISK: "DOWNLOADING_AND_SAVING_TO_DISK",
    COMPLETE: "COMPLETE",
    ERROR: "ERROR"
  },
  FILE_STATUSES: {
    DOWNLOAD_FILE_FUNCTION_NOT_YET_CALLED: "DOWNLOAD_FILE_FUNCTION_NOT_YET_CALLED",
    DOWNLOADING_AND_SAVING_TO_DISK: "DOWNLOADING_AND_SAVING_TO_DISK",
    CHECKING_DATA_INTEGRITY: "CHECKING_DATA_INTEGRITY",
    COMPLETE: "COMPLETE",
    ERROR: "ERROR"
  },
  CHUNK_STATUSES: {
    DOWNLOAD_CHUNK_FUNCTION_NOT_YET_CALLED: "DOWNLOAD_CHUNK_FUNCTION_NOT_YET_CALLED",
    SENDING_REQUEST: "SENDING_REQUEST",
    SAVING_TO_DISK: "SAVING_TO_DISK",
    COMPLETE: "COMPLETE",
    ERROR: "ERROR",
    CANCELLED_BY_ERROR_IN_OTHER_CHUNK: "CANCELLED_BY_ERROR_IN_OTHER_CHUNK"
  }
}

export default LOCAL_DOWNLOADING_CONSTANTS
