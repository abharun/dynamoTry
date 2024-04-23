export enum PayloadError {
  InvalidPhoneNumber = "Invalid Phone Number",
  InvalidPassword = "Invalid Password",
}

export enum AuthError {
  NoSecretKey = "Secret Key is not set in the env",
  Unauthorized = "Unauthorized request",
}

export enum FetchLeagueError {
  LeagueDataFailed = "Failed to fetch League data",
}
