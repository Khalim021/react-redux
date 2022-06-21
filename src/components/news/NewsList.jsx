import React from 'react';
import { useEffect } from 'react';
import {useHttp} from '../../hooks/useHttp'
import { useSelector, useDispatch } from 'react-redux';
import { newsFetching, newsFetched, newsFetchedError} from '../../redux/actions'
import Loader from '../Loader';
import ErrorPage from '../ErrorPage';
import NewsItem from './NewsItem';

function NewsList() {
  const {newspaper, loadingStatus} = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();

  console.log(newspaper)

  useEffect(() => {
    dispatch(newsFetching())
    request(`http://localhost:3001/newspaper`)
    .then(data => dispatch(newsFetched(data)))
    .catch(() => dispatch(newsFetchedError()))

    // eslint-disable-next-line
  }, []);

  if(loadingStatus === 'loading...') {
    return <Loader/>
  } else if(loadingStatus === 'error...') {
    return <ErrorPage />
  }

  const elementRenderList = (arr) => {
    if(arr.length === 0) {
      return <h4 className='no-news'>News does not exists</h4>
    }
    return arr.map(({id, ...props}) => {
      return <NewsItem key={id} {...props}/>
    })
  }
  const el = elementRenderList(newspaper)

  return (
    <ul>
      {el}
    </ul>
  )
}

export default NewsList;
