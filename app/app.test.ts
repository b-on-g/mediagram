namespace $.$$ {

	$mol_test({

		'1. app instantiates'() {
			const app = new $bog_mediagram_app
			$mol_assert_equal( Boolean( app ), true )
		},

		'2. default tab is library'() {
			const app = new $bog_mediagram_app
			$mol_assert_equal( app.tab(), 'library' )
		},

		'3. tab() setter switches state'() {
			const app = new $bog_mediagram_app
			app.tab( 'circles' )
			$mol_assert_equal( app.tab(), 'circles' )
		},

		'4. body_content() on circles tab returns Circles_pane only — no baza read'() {
			const app = new $bog_mediagram_app
			app.tab( 'circles' )
			const content = app.body_content()
			$mol_assert_equal( content.length, 1 )
			$mol_assert_equal( content[ 0 ], app.Circles_pane() )
		},

		'5. nav.circles_click через <=> биндинг обновляет app.tab()'() {
			console.log( '[mediagram-test] 5. nav.circles_click — start' )
			const app = new $bog_mediagram_app
			console.log( '[mediagram-test] 5. before app.Nav()' )
			const nav = app.Nav()
			console.log( '[mediagram-test] 5. before nav.circles_click()' )
			nav.circles_click()
			console.log( '[mediagram-test] 5. after nav.circles_click()' )
			$mol_assert_equal( app.tab(), 'circles' )
			console.log( '[mediagram-test] 5. pass' )
		},

		'6. nav.library_active() реактивно'() {
			console.log( '[mediagram-test] 6. start' )
			const app = new $bog_mediagram_app
			app.tab( 'library' )
			const nav = app.Nav()
			$mol_assert_equal( nav.library_active(), 'on' )
			console.log( '[mediagram-test] 6. before tab(feed)' )
			app.tab( 'feed' )
			console.log( '[mediagram-test] 6. after tab(feed)' )
			$mol_assert_equal( nav.library_active(), 'off' )
			$mol_assert_equal( nav.feed_active(), 'on' )
			console.log( '[mediagram-test] 6. pass' )
		},

	})

}
