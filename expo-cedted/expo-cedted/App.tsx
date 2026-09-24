import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ListaItens, { DATA } from "./components/ListaItens/ListaItens";
import { colors } from "./components/colors";
import { ProdutoItem } from "./interfaces/ProdutoItem";

const STORAGE_KEY = "@lista_compras:produtos";

export default function App() {
  const [produtos, setProdutos] = useState<ProdutoItem[]>([]);
  const [carregado, setCarregado] = useState(false);

  // Carrega os dados salvos (ou o mock inicial, se ainda não houver nada salvo)
  useEffect(() => {
    async function carregarProdutos() {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        setProdutos(json ? JSON.parse(json) : DATA);
      } catch (erro) {
        console.log("Erro ao carregar produtos do AsyncStorage:", erro);
        setProdutos(DATA);
      } finally {
        setCarregado(true);
      }
    }

    carregarProdutos();
  }, []);

  // Salva sempre que a lista mudar (depois do carregamento inicial, para não sobrescrever com [])
  useEffect(() => {
    if (!carregado) return;

    async function salvarProdutos() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
      } catch (erro) {
        console.log("Erro ao salvar produtos no AsyncStorage:", erro);
      }
    }

    salvarProdutos();
  }, [produtos, carregado]);

  function adicionarProduto(nome: string) {
    const nomeLimpo = nome.trim();
    if (!nomeLimpo) return;

    const novoProduto: ProdutoItem = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 8),
      nome: nomeLimpo,
      comprado: false,
    };

    setProdutos((listaAtual) => [...listaAtual, novoProduto]);
  }

  function alternarComprado(id: string) {
    setProdutos((listaAtual) =>
      listaAtual.map((produto) =>
        produto.id === id ? { ...produto, comprado: !produto.comprado } : produto
      )
    );
  }

  function removerProduto(id: string) {
    setProdutos((listaAtual) => listaAtual.filter((produto) => produto.id !== id));
  }

  function limparItens(comprados: boolean) {
    setProdutos((listaAtual) =>
      listaAtual.filter((produto) => produto.comprado !== comprados)
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Form onAdicionar={adicionarProduto} />
        <ListaItens
          produtos={produtos}
          onAlternarComprado={alternarComprado}
          onRemoverProduto={removerProduto}
          onLimparItens={limparItens}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
