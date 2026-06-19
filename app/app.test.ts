namespace $.$$ {

	$mol_test({

		'1. app instantiates'() {
			console.log( '[mediagram-test] 1. start' )
			const app = new $bog_mediagram_app
			$mol_assert_equal( Boolean( app ), true )
			console.log( '[mediagram-test] 1. pass' )
		},

		'2. tab() write+read is round-trip'() {
			console.log( '[mediagram-test] 2. start' )
			const app = new $bog_mediagram_app
			app.tab( 'circles' )
			$mol_assert_equal( app.tab(), 'circles' )
			app.tab( 'library' )
			$mol_assert_equal( app.tab(), 'library' )
			console.log( '[mediagram-test] 2. pass' )
		},

		'3. body_content() switches on tab without baza access'() {
			console.log( '[mediagram-test] 3. start' )
			const app = new $bog_mediagram_app
			app.tab( 'circles' )
			const c1 = app.body_content()
			$mol_assert_equal( c1.length, 1 )
			app.tab( 'feed' )
			const c2 = app.body_content()
			$mol_assert_equal( c2.length, 1 )
			app.tab( 'me' )
			const c3 = app.body_content()
			$mol_assert_equal( c3.length, 1 )
			console.log( '[mediagram-test] 3. pass' )
		},

		'4. nav.circles_click() обновляет app.tab()'() {
			console.log( '[mediagram-test] 4. start' )
			const app = new $bog_mediagram_app
			const nav = app.Nav()
			nav.circles_click()
			$mol_assert_equal( app.tab(), 'circles' )
			console.log( '[mediagram-test] 4. pass' )
		},

		'5. nav.tab_active реактивно реагирует'() {
			console.log( '[mediagram-test] 5. start' )
			const app = new $bog_mediagram_app
			const nav = app.Nav()
			app.tab( 'feed' )
			$mol_assert_equal( nav.feed_active(), 'on' )
			$mol_assert_equal( nav.library_active(), 'off' )
			app.tab( 'circles' )
			$mol_assert_equal( nav.circles_active(), 'on' )
			$mol_assert_equal( nav.feed_active(), 'off' )
			console.log( '[mediagram-test] 5. pass' )
		},

		'6. body_content() на library с стабом baza НЕ виснет'() {
			console.log( '[mediagram-test] 6. start — это и был «виснущий» тест' )
			const app = new $bog_mediagram_app
			app.entries_baza = () => []
			app.tab( 'library' )
			const c = app.body_content()
			console.log( '[mediagram-test] 6. lib_content len=', c.length )
			$mol_assert_equal( c.length, 3 )
			console.log( '[mediagram-test] 6. pass' )
		},

	})

}
