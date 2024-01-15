import { cx } from 'class-variance-authority'

import { Store } from '~/domain/store.ts'

export function HomePage() {
  const store = Store.useCtx()

  return (
    <div className="home-page">
      <div className={cx(
        '[box-shadow:inset_0_8px_8px_-8px_rgba(0,_0,_0,_0.3),_inset_0_-8px_8px_-8px_rgba(0,_0,_0,_0.3)]',
        'mb-8 p-8 text-white bg-[#5cb85c]'
      )}>
        <div className="container mx-auto px-3">
          <h1 className={cx(
            '[text-shadow:0px_1px_3px_rgba(0,_0,_0,_0.3)]',
            'pb-2 font-[\'Titillium_Web\'] text-center text-[3.5rem] leading-[1.1]'
          )}>
            conduit
          </h1>
          <p className="font-light text-center text-2xl">A place to share your knowledge.</p>
        </div>
      </div>
      <div>
        <button onClick={() => store.loading.value = true}>loading</button>
        <div>{`loading: ${store.loading.value}`}</div>
        <pre>User: {JSON.stringify(store.user.value, null, 2)}</pre>
      </div>
    </div>
  )
}
