import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './App.css'
import 'react-tabs/style/react-tabs.css'
import FileEditor from './Editor'

const { remote } = window.require('electron')
const { MenuItem } = remote

function App(props) {
	const [tabs, setTabs] = useState([
		{
			title: "Tab 1",
			children: <FileEditor />
		},
		{
			title: "Tab 2",
			children: <FileEditor />
		}
	])
	// const [tabIndex, setTabIndex] = useState(0)
	let menuItems = []
	const changeTab = (index) => {
		window.titlebar.updateTitle(tabs[index].title)
	}
	const createTab = (name, children) => {
		setTabs([...tabs, {
			title: name,
			children: children
		}])
		// setTabIndex(tabs.length)
	}
	// menuItems.push(new MenuItem({
	// 	label: "test",
	// 	click() {
	// 		console.log('a')
	// 	}
	// }))
	// menuItems.map((menuItem) => {
	// 	window.menu.append(menuItem)
	// })
	// window.titlebar.updateMenu(window.menu)
	// menuItems = []
	return (
		<div className="App">
			<Tabs onSelect={changeTab}>
				<TabList>
					{tabs.map((tab) => {
						return <Tab key={Math.random()}>{tab.title}</Tab>
					})}
					<button onClick={() => {
						const tabNum = tabs.length + 1
						createTab(
							`Tab ${tabNum}`,
							<FileEditor />
						)
					}}>Create Tab</button>
				</TabList>
				{tabs.map((tab) => {
					return <TabPanel key={Math.random()}>
						{tab.children}
					</TabPanel>
				})}
			</Tabs>
		</div>
	)
}

export default App;
