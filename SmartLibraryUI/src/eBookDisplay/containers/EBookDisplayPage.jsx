/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import EBookTable from "../components/EBookTable";

import getListEBook from '../services/getListEBook'
const EBookDisplayPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	cardEBook: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listEBook, setListEBook] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, cardEBook: true}))
				const { data: listEBook } = await getListEBook()
				setListEBook(listEBook.data)
			} finally {
				setIsLoading(prev => ({...prev, cardEBook: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("EBook Display Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Card EBook"}
	singularName={"EBook"}
	items={[listEBook]}
	isLoading={isLoading.cardEBook}
>
	<EBookTable
		listEBook={listEBook}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EBookDisplayPage

