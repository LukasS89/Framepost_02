// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rNmfjZwLNAMxE9BRKEpbLN
// Component: yXosNAhrnOsk

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: rNmfjZwLNAMxE9BRKEpbLN/projectcss
import sty from "./PlasmicVideoMainThird.module.css"; // plasmic-import: yXosNAhrnOsk/css

createPlasmicElementProxy;

export type PlasmicVideoMainThird__VariantMembers = {
  click: "click";
};
export type PlasmicVideoMainThird__VariantsArgs = {
  click?: SingleBooleanChoiceArg<"click">;
};
type VariantPropType = keyof PlasmicVideoMainThird__VariantsArgs;
export const PlasmicVideoMainThird__VariantProps = new Array<VariantPropType>(
  "click"
);

export type PlasmicVideoMainThird__ArgsType = {
  value?: string;
  pressed?: boolean;
  onPressedChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicVideoMainThird__ArgsType;
export const PlasmicVideoMainThird__ArgProps = new Array<ArgPropType>(
  "value",
  "pressed",
  "onPressedChange"
);

export type PlasmicVideoMainThird__OverridesType = {
  root?: Flex__<"a"> & Partial<LinkProps>;
  h1?: Flex__<"h1">;
  text?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultVideoMainThirdProps {
  value?: string;
  pressed?: boolean;
  onPressedChange?: (val: string) => void;
  click?: SingleBooleanChoiceArg<"click">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicVideoMainThird__RenderFunc(props: {
  variants: PlasmicVideoMainThird__VariantsArgs;
  args: PlasmicVideoMainThird__ArgsType;
  overrides: PlasmicVideoMainThird__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          value: "Animovan\u00e1 videa"
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "h1Render",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      },
      {
        path: "click",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.pressed;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.click
      },
      {
        path: "pressed",
        type: "writable",
        variableType: "boolean",

        valueProp: "pressed",
        onChangeProp: "onPressedChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <PlasmicLink__
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootclick]: hasVariant($state, "click", "click") }
      )}
      component={Link}
      platform={"nextjs"}
    >
      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(projectcss.all, projectcss.h1, sty.h1, {
          [sty.h1click]: hasVariant($state, "click", "click")
        })}
        style={(() => {
          try {
            return {
              gap: "6px"
            };
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return undefined;
            }
            throw e;
          }
        })()}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            { [sty.textclick]: hasVariant($state, "click", "click") }
          )}
          value={args.value}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.value;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Animovan\u00e1 videa";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxclick]: hasVariant($state, "click", "click")
          })}
        />
      </h1>
    </PlasmicLink__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "text", "freeBox"],
  h1: ["h1", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  h1: "h1";
  text: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVideoMainThird__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVideoMainThird__VariantsArgs;
    args?: PlasmicVideoMainThird__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVideoMainThird__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicVideoMainThird__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicVideoMainThird__ArgProps,
          internalVariantPropNames: PlasmicVideoMainThird__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicVideoMainThird__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVideoMainThird";
  } else {
    func.displayName = `PlasmicVideoMainThird.${nodeName}`;
  }
  return func;
}

export const PlasmicVideoMainThird = Object.assign(
  // Top-level PlasmicVideoMainThird renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicVideoMainThird
    internalVariantProps: PlasmicVideoMainThird__VariantProps,
    internalArgProps: PlasmicVideoMainThird__ArgProps
  }
);

export default PlasmicVideoMainThird;
/* prettier-ignore-end */
