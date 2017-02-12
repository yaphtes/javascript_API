{   // Mount

    // 1. первым срабатывает constructor()
    constructor()

    // 2. Срабатывает непосредственно перед вызовом render()
    componentWillMount()

    // 3. далее сработает метод render()
    render()

    // 4. Непосредственно после метода render()
    componentDidMount()
}


{   // Update

    // 1. Срабатывает перед тем, как компонент получит новые значения свойств.
    // nextProps - новые значения свойств. Метод не срабатывает при первом выводе компонента в DOM
    componentWillRecieveProps(nextProps: object)

    // 2. Срабатывает непосредственно перед очередным вызовом метода render()
    // вследствии обновления свойств или состояния. nextProps - новые значения свойств,
    // nextState - новые значения состояния. Не срабатывает при установке компонета в DOM.
    // В shouldComponentUpdate() часто используется в целях оптимизации. Данный метод уникален тем,
    // что должен вернуть либо true, либо false, если вернуть false, то компонент не меняется.
    shouldComponentUpdate(nextProps: object, nexState: object)  // => bool

    // 3. Срабатывает непосредственно перед очередным вызовом метода render()
    // вследствии обновления свойств или состояния. nextProps - новые значения свойств,
    // nextState - новые значения состояния. Не срабатывает при установке компонета в DOM.
    // В componentWillUpdate() можно как-то изменить переданны значения свойств или состояния
    // перед обновлением.
    componentWillUpdate(nextProps: object, nextState: object)

    // 4. далее сработает метод render()
    render()

    // 5. Срабатывает после вызова render в Update этапе. prevProps - предыдущие значения свойств,
    // prevState - предыдущие значения состояния. В componentDidUpdate() можно работать с компонентом
    // после его обновления.
    componentDidUpdate(prevProps: object, prevState: object)
}


{   // Unmount

    // 1. Срабатывает перед удалением компонента из DOM. С помощь него можно
    // почистить DOM и удалить таймеры\интервали. И много другое...
    componentWillUnmoun()
}
