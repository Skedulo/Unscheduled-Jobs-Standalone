import * as React from "react";
import Header from "./Header";
import Routers from "./router";
import { controls } from "@skedulo/custom-form-controls";
import { connect } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const { GoBackConfirmModal, Loading } = controls;

interface IState {
  showConfirm?: boolean;
  dimension?: number;
}

interface IProps {
  showLoading?: boolean;
  view: string;
}
class Main extends React.Component<IProps, IState> {
  state: IState = {
    showConfirm: false,
    dimension: Main.getDimension(),
  };

  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Header
            onSaveFn={this.saveFn.bind(this)}
            onGobackFn={this.goBackFn.bind(this)}
            showConfirm={() => this.setState({ showConfirm: true })}
          />
          <section>
            {/*------------------ common items ---------------------*/}
            <div className="scroll-touch" style={{ overflowY: "scroll" }}>
              <Routers view={this.props.view} />
            </div>
          </section>

          <GoBackConfirmModal
            show={!!this.state.showConfirm}
            onConfirmGoBack={(val: boolean) => this.confirmGoBack(val)}
          />
          <Loading loading={this.props.showLoading} />
        </div>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    );
  }

  goBackFn() {
    this.setState({ showConfirm: true });
  }

  saveFn() {
    this.setState({ showConfirm: true });
  }

  // ------------ private function -------------- //

  confirmGoBack(confirm: boolean) {
    this.setState({
      showConfirm: confirm,
    });
  }

  componentDidMount() {
    window.addEventListener(
      "orientationchange",
      () => this.handleScreenRotate(),
      false
    );
    this.handleScreenRotate();
  }

  handleScreenRotate() {
    this.setState({ dimension: Main.getDimension() });
    this.forceUpdate();
  }

  static getDimension(): number {
    if (window.orientation !== 0) {
      return 1; // types.DIMENSION.landscape
    }
    return 0; // types.DIMENSION.portrait
  }
}

export default connect((state: any) => ({
  view: state.reducer.view,
  showLoading: state.reducer.showLoading,
}))(Main);
