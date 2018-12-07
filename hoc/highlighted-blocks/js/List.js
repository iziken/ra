'use strict';

const itemProps = props => props.children;

const itemView = (Component) => class itemViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const views = this.props.views;
        let ComponentChoise = itemProps;
        if (views < 100) ComponentChoise = New;
        if (views >= 1000) ComponentChoise = Popular;
        this.setState({ ComponentChoise: ComponentChoise });
    }

    render() {
        const ComponentChoise = this.state.ComponentChoise;
        return (
            <ComponentChoise>
                <Component {...this.props} />
            </ComponentChoise>
        );
    }
};

const ItemViewArticle = itemView(Article);
const ItemViewVideo = itemView(Video);

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <ItemViewVideo {...item} />
                );

            case 'article':
                return (
                    <ItemViewArticle {...item} />
                );
        }
    });
};
