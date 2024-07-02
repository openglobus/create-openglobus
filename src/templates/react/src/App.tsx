import '@openglobus/openglobus-react/dist/style.css'
import './App.css'
import {Entity, Globe, GlobeContextProvider, Label, Vector} from '@openglobus/openglobus-react'


function App() {
    return <GlobeContextProvider>
        <Globe fontsSrc="https://openglobus.org/examples/examples/fonts/fonts">
            <Vector name="test" >
                <Entity
                    alt={0}
                    lat={0}
                    lon={0}
                    name="Custom Entity"
                >
                    <Label
                        align="center"
                        color="#053df3"
                        face="Audiowide-Regular"
                        offset={[
                            0,
                            32,
                            0
                        ]}
                        opacity={1}
                        outline={0.2}
                        outlineColor="#33fa07"
                        rotation={0}
                        size={32}
                        text="Hello world!"
                    />

                </Entity>
                <Entity
                    alt={0}
                    lat={0}
                    lon={0}
                    name="Custom q"
                >
                    <Label
                        align="center"
                        color="#053df3"
                        face="Audiowide-Regular"
                        offset={[
                            0,
                            0,
                            0
                        ]}
                        opacity={1}
                        outline={0.2}
                        outlineColor="#33fa07"
                        rotation={0}
                        size={24}
                        text="Welcome to OpenGlobus!"
                    />

                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}

export default App
