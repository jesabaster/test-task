import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { getFetchUrl } from "../../utils";
import { GlassesPreview } from "../GlassesPreview";
import "./styles.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IGlassesItem } from "../../models/IGlasses";
import ReactLoading from "react-loading";
import { useAppSelector } from "../../hooks/redux";
import { PageBottom } from "../PageBottom";

export const GlassesWrapper = () => {
  const [glasses, setGlasses] = useState<Array<IGlassesItem>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const { filters } = useAppSelector((state) => state.filterReducer);
  const { currentCollection } = useAppSelector(
    (state) => state.collectionReducer
  );
  const { colour, shape } = filters;

  useEffect(() => {
    setGlasses([]);
    setCurrentPage(1);
    setIsFetching(true);
  }, [filters, currentCollection]);

  const scrollHandler = useCallback(
    (e: Event) => {
      const target = e.target as Document;
      if (
        target.documentElement.scrollHeight -
          (target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        glasses.length < totalCount
      ) {
        setIsFetching(true);
      }
    },
    [glasses.length, totalCount]
  );

  useEffect(() => {
    if (isFetching) {
      axios
        .get(getFetchUrl(currentPage, currentCollection, colour, shape))
        .then(({ data }) => {
          setGlasses([...glasses, ...data.glasses]);
          setCurrentPage((prev) => prev + 1);
          setTotalCount(data.meta.total_count);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [glasses, scrollHandler]);

  const renderBottom = () => {
    if (glasses.length) {
      if (glasses.length === totalCount) {
        return <PageBottom isLast={true} />;
      }
      return <PageBottom />;
    }
  };

  return (
    <>
      {isFetching ? (
        <div className="loading-wrapper">
          <ReactLoading type="spin" height={70} width={70} color="black" />
        </div>
      ) : null}
      <TransitionGroup className="glasses-wrapper">
        {glasses.map((e: any) => {
          return (
            <CSSTransition key={e.id} timeout={500} classNames="item">
              <GlassesPreview
                name={e.name}
                img={e.glass_variants[0].media[0].url}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      {renderBottom()}
    </>
  );
};
