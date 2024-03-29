// get the copy button
const copyButton = document.querySelector("[wb-data=copy-button]");

// listen for click on copy button
copyButton.addEventListener("click", (event) => {
  const buttonText = copyButton.querySelector('[wb-data="text"]');

  // change button text to inform user operation in progress
  buttonText.textContent = "Copied...";

  // define function to copy
  const copyHtml = (event) => {
    event.preventDefault();
    const componentHtml = copyButton.querySelector('[wb-data="html"]')
      .textContent;
    event.clipboardData.setData("text/html", componentHtml);
  };

  // listen for copy
  document.addEventListener("copy", copyHtml);
  // execute a copy command
  document.execCommand("copy");
  // remove copy listener (to allow normal copy/paste again)
  document.removeEventListener("copy", copyHtml);

  // after 1 second, set button text back
  setTimeout(() => {
    buttonText.textContent = "Copied to Figma";
  }, 1000);
});
