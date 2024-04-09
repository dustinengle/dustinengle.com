
function deactivateTabs() {
  const tabs = document.getElementsByClassName('tab')
  for (let tab of tabs) {
    tab.classList.remove('active')
  }
}

function hidePanels() {
  const panels = document.getElementsByClassName('panel')
  for (let panel of panels) {
    panel.classList.remove('active')
  }
}

function showPanel(tab, panelId) {
  deactivateTabs()
  tab.classList.add('active')

  hidePanels()
  document.getElementById(panelId).classList.add('active')
}
