document.getElementById("start").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => localStorage.setItem('bigBotRunning', 'true')
    });
  });
});

document.getElementById("stop").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => localStorage.setItem('bigBotRunning', 'false')
    });
  });
});