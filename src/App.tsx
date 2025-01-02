import { Button } from "antd";
import { AppKitProvider } from "./AppKitProvider";
import { useAppKit } from "@reown/appkit/react";
import clsx from "clsx";
import { css } from "./lib/emotion";
import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";

function App() {
  const { open, close } = useAppKit();
  return (
    <>
      <StyleProvider transformers={[px2remTransformer({ rootValue: 37.5 })]}>
        <AppKitProvider>
          <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <Button
              className={clsx(
                "text-black/90",
                css`
                  font-size: 14px;
                  > span {
                    line-height: 1;
                  }
                `
              )}
              onClick={() => open()}
            >
              connect
            </Button>
          </div>
        </AppKitProvider>
      </StyleProvider>
    </>
  );
}

export default App;
