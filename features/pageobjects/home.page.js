class HomePage {
  // =============== Main Page Search Input Locators ==================
  get container_docSearch() {
    return $(".DocSearch-Button-Container");
  }
  get input_docSearch() {
    return $("#docsearch-input");
  }

  // ====================  Search Input Actions ===================
  clickOnContainerDocSearch = async () => {
    await this.container_docSearch.click();
  };

  clickOnInputDocSearch = async () => {
    await this.input_docSearch.click();
  };

  fillDataToSearchInput = async (searchData) => {
    await this.input_docSearch.setValue(searchData);
  };
}
export default new HomePage();
