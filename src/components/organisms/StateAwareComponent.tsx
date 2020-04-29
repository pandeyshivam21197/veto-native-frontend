import LoadingSpinner from '@components/atoms/LoadingSpinner';
import EmptyComponent from '@components/molecules/EmptyComponent';
import ErrorComponent from '@components/molecules/ErrorComponent';
import React, {PureComponent} from 'react';

export interface IStateAwareComponentProps {
    loading: boolean;
    error: string;
    empty?: boolean;
    renderComponent: React.ReactNode;
    emptyText?: string;
    onErrorPress: () => void;
}

class StateAwareComponent extends PureComponent<IStateAwareComponentProps> {

    public render() {
        const {
            loading,
            error,
            empty,
            onErrorPress,
            emptyText,
            renderComponent,
        } = this.props;

        let renderView: React.ReactNode;

        if (error.length > 0) {
            renderView = <ErrorComponent text={error} onPress={onErrorPress}/>;
        } else if (loading) {
            renderView = <LoadingSpinner/>;
        } else if (empty) {
            renderView = <EmptyComponent text={emptyText}/>;
        } else {
            renderView = renderComponent;
        }

        return renderView;
    }
}

export default StateAwareComponent;
