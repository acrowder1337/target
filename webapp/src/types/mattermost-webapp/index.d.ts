export interface PluginRegistry {
    registerPostTypeComponent(typeName: string, component: React.ElementType)
    registerReducer(reducer: Reducer)
    registerGlobalComponent(component: React.ElementType)
    registerSidebarChannelLinkLabelComponent(component: React.ElementType)
    registerChannelToastComponent(component: React.ElementType)
    registerChannelHeaderButtonAction(component: React.ElementType, fn: (channel: Channel) => void)
    registerChannelHeaderMenuAction(component: React.ElementType, fn: (channelID: string) => void)
    registerWebSocketEventHandler(evType: string, fn: (event: WebSocketEvent) => void)
    unregisterComponent(componentID: string)
}
