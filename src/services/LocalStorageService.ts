class LocalStorageService {
  getToken() {
    let name = "token";
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  setToken(token: string) {
    return (document.cookie = `token=${token}`);
  }
  resetToken() {
    return (document.cookie = "token=;max-age=-1");
  }
}

export default new LocalStorageService();
