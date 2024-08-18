document.getElementById('openTab').addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://yt-transcript.streamlit.app' });
  });
  